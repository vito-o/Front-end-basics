export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated(to.path) === false) {
    return navigateTo('/login')
  }
})


function isAuthenticated(path: string):boolean {
  console.log(path, 'p')

  return true
}