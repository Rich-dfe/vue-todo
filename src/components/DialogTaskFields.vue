<template>
  <div class="text-center pa-4">
    <v-dialog v-model="props.dialog" max-width="400" persistent>
      <!-- <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          Open Dialog
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title> Edit Task </v-card-title>
        <v-card-text>
          <v-text-field
            clearable
            label="Title"
            v-model="props.task.title"
          ></v-text-field>
          <v-text-field
            clearable
            label="Description"
            v-model="props.task.subtitle"
          ></v-text-field>
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="elevated"
            color="primary-darken-1"
            @click="$emit('toggle')"
          >
            OK
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  dialog: Boolean,
  task: Object,
});
</script>
