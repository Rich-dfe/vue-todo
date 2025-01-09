import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", () => {
  const showAlert = ref(false);
  const text = ref("");
  const title = ref("");
  const type = ref("");

  function notifyAlert() {
    this.showAlert = true;
    setTimeout(() =>{
        this.showAlert = false;
    },2000)
  };

  function notifyAlertCreated(){
    this.text = "Task Created";
    this.title = "Yay!";
    this.type = "success";
    this.notifyAlert();
  };

  function notifyAlertDeleted(){
    this.text = "Task Deleted";
    this.title = "Thanks!";
    this.type = "warning";
    this.notifyAlert();
  };

  return { showAlert, notifyAlert, text, title, type, notifyAlertCreated, notifyAlertDeleted };
});
