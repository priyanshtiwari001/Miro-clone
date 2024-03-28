# MIRO Clone

## Clerk:

### Tech stack

1. Nextjs - react framework library - npx create-next-app@latest
2. Shadcn - component library - npx shadcn-ui@latest init
3. Tailwind css - styling - follow the doc
4. convex - as a database - npm install convex
5. lucide-react- for svg icons
6. Query-string - allows you to parse and stringify URL query strings in your projects. It offers a straightforward way to work with query parameters in URLs.
7. usehooks-ts - react hooks library with ts
8. date-fns
9. redux-toolkit - npm install @reduxjs/toolkit
10. npm i convex-helpers

## Nextjs quick note

- Route groups:

  - Route groups allows to prevent the folders from being included in the route's URL path.
  - This allows you to organize your route segments and project files into logical groups without affecting the URL path structure. example: (folderName)
  - **Private folder** indicates the folder is a private implementation detail and should not be considered by the routing system, thereby opting the folder and all its subfolders out of routing. example: (\_folderName)

- Link:

  - <Link> is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes.
  - What is pre-fetching?
    - It is a way to preload a routein the background before user visits it.
  - To check whether link is active or not , we use a hook called `usepathname()`

- useSearchParams:
  - It is a Client Component hook that lets you read the current URL's query string.
  - It returns read-only version of URLSearchParams.
    It return entries,get,getAll,size and etc. all are functions
  ```
  const searchparam = useSearcParams();
  searchparam.fun() {fun = entries,has,get,getAll}
  ```
- useRouter:

  - it allows to programmtically change the routes in client component.
  - it console back,foward,push,fastrefresh,prefetch and etc..
  - ```
     const route = useRouter();
     const common = {href:string,scroll:boolean};
    1. route.push(common) - Perform a client-side navigation to the provided route. Adds a new entry into the browser’s history stack.
    2. route.replace - perform a client-side navigation to the provided route without adding new entry

    ```
