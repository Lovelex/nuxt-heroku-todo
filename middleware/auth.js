export default ({redirect, store}) => {
  // If the user is not authenticated
  const user = store.getters['auth/getUser']
  if(!user) {
    redirect('/login')
  }
  
}