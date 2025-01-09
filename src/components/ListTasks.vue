<template>
    <v-list
      v-model:selected="settingsSelection"
      lines="two"
      select-strategy="leaf"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="item, index in props.settingsItems"
        :key="item.value"
        :subtitle="item.subtitle"
        :title="item.title"
        :value="item.value"
      >
        <template v-slot:prepend="{ isSelected }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <template v-slot:append>
          <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="grey-lighten-1"
          icon="mdi-dots-vertical"
          variant="text"
          v-bind="props"
        >
        </v-btn>
      </template>
      <v-list>
        <v-list-item value="1">
          <v-list-item-title @click="toggleDialog(index)">Editor</v-list-item-title>
        </v-list-item>
    
      <v-list-item value="2">
          <v-list-item-title @click="toggleDialogDelete(index)">Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        </template>
      </v-list-item>
    </v-list>
<!-- dialog and task are props sent TO the child component but toggle is listening for an event FROM the component. -->
<DialogTaskFields
:dialog="showDialogTaskFields"
:task = settingsItems[taskIndex]
@toggle="toggleDialog"
/>
<DialogDelete
:dialog="showDialogDelete"
@toggleDelete="toggleDialogDelete"
@deleteTask = "deleteTask"
/>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import DialogTaskFields from '@/components/DialogTaskFields.vue';
import DialogDelete from '@/components/DialogDelete.vue';


const props = defineProps({
  settingsItems: Object
});

const settingsSelection = ref([]);
const showDialogTaskFields = ref(false);
const showDialogDelete = ref(false);
const taskIndex = ref(0);

const toggleDialog = (index) =>{
  showDialogTaskFields.value = !showDialogTaskFields.value;
  if(index != null){
    taskIndex.value = index;
  }
}

const toggleDialogDelete = (index) =>{
  showDialogDelete.value = !showDialogDelete.value;
  if(index != null){
    taskIndex.value = index;
  }
}

const deleteTask = () => {
  props.settingsItems.splice(taskIndex.value,1);
  toggleDialogDelete();
}

</script>

<style>

</style>