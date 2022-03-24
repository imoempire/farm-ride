export const updateNotifications = (updater, text, type="error") => {
   updater({text, type});
   setTimeout(() =>{
      updater({
         text: '', type: ''
      })
   }, 2500)
}