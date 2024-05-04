import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { page, redirect } from "~/schema/cms";
import { firstItemOrNull } from "~/schema/helpers";

const responseShape = z.array(page.or(redirect)).transform(firstItemOrNull);

export const getCmsUrls = createQuery({
  path: "/cmsurls",
  responseShape,
  withAuthToken: false,
});
