import { mutation } from "./_generated/server";
import { v } from "convex/values";

const img = [
  "/placeholders/2.svg",
  "/placeholders/1.svg",
  "/placeholders/3.svg",
  "/placeholders/4.svg",
  "/placeholders/5.svg",
  "/placeholders/6.svg",
  "/placeholders/7.svg",
  "/placeholders/8.svg",
  "/placeholders/9.svg",
];

//* MUTATIONS - to update or write the data in convex

export const create = mutation({
  args: { title: v.string(), orgId: v.string() },
  handler: async (ctx, args) => {
    const indentity = await ctx.auth.getUserIdentity();

    if (!indentity) {
      return new Error("unauthorized");
    }

    const randomImage = img[Math.floor(Math.random() * img.length)];
    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: indentity.subject,
      authorName: indentity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});

export const remove = mutation({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: { title: v.string(), id: v.id("boards") },
  handler: async (ctx, arg) => {
    const identity = await ctx.auth.getUserIdentity();
    const title = arg.title.trim();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    if (!title) {
      throw new Error("Title is required");
    }
    if (title.length > 60) {
      throw new Error("Title is not more than 60 characters");
    }
    const renameBoard = await ctx.db.patch(arg.id, {
      title: arg.title,
    });
    return renameBoard;
  },
});

export const favorite = mutation({
  args: { id: v.id("boards"), orgId: v.string() },
  handler: async (ctx, arg) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const board = await ctx.db.get(arg.id); // get the single data from the database

    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board_org", (q) =>
        q.eq("userId", userId).eq("boardId", board!._id).eq("orgId", arg.orgId)
      )
      .unique();

    if (existingFavorite) {
      throw new Error("Board is already exist");
    }

    await ctx.db.insert("userFavorites", {
      orgId: arg.orgId,
      userId,
      boardId: board!._id,
    });
  },
});
