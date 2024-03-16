//* Query- to fetch the data from the convex

import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: { orgId: v.string() },
  handler: async (ctx, arg) => {
    const indentity = ctx.auth.getUserIdentity();

    if (!indentity) {
      throw new Error("Unauthroized");
    }

    const boards = ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", arg.orgId))
      .order("desc")
      .collect();

    return boards;
  },
});
