<template>
  <div class="text-center pa-4">
    <v-dialog v-model="props.dialog" max-width="400" persistent>
      <v-card
        prepend-icon="mdi-map-marker"
        text="This is doing to delete a task..."
        title="Confirm Delete?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="elevated"
            color="red-darken-1"
            @click="$emit('toggleDelete')"
          >
            Nope
          </v-btn>
          <v-btn
            variant="outlined"
            color="red-darken-1"
            @click="$emit('deleteTask')"
          >
            Confirm
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
});
</script>
