// Utilities
import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
const alertStore = useAlertStore();

export const useTaskStore = defineStore("task", () => {
  const settingsItems = ref([
    {
      value: "notifications",
      title: "Notifications",
      subtitle: "Notify me about updates to apps or games that I downloaded",
    },
    {
      value: "sound",
      title: "Sound",
      subtitle: "Auto-update apps at any time. Data charges may apply",
    },
    {
      value: "widgets",
      title: "Auto-add widgets",
      subtitle: "Automatically add home screen widgets when downloads complete",
    },
  ]);

  const titleTaskCreating = ref("");
  const subtitleTaskCreating = ref("");
  const valueTaskCreating = ref("");

  function addTask() {
    if (this.titleTaskCreating.length <= 5) {return}
      this.settingsItems.push({
        title: this.titleTaskCreating,
      });
    
    alertStore.notifyAlertCreated();

    this.titleTaskCreating = "";
  }

  return {
    settingsItems,
    titleTaskCreating,
    subtitleTaskCreating,
    valueTaskCreating,
    addTask,
  };
});
