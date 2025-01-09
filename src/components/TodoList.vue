<template>
    <v-text-field
    clearable
    label="Task"
    :rules="rules"
    v-model='taskStore.titleTaskCreating'
    @keyup.enter="taskStore.addTask">
    </v-text-field>

    <ListTasks :settingsItems="taskStore.settingsItems"/>
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

const rules = [
        (value) => {
          if (!value || value.length >= 5) return true
          return 'Please enter 5 or more characters.'
        },
      ];
</script>