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
