```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <CameraComponent @photo-captured="addPhoto" />

      <PhotoGalleryComponent :photos="photos" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { ref } from "vue";

// Components
import CameraComponent from "../Components/CameraComponent.vue";
import PhotoGalleryComponent from "../Components/PhotoGalleryComponent.vue";

// Store photos locally
const photos = ref<string[]>([]);

// Add captured photo to the gallery
const addPhoto = (photo: string) => {
  photos.value.push(photo);

  console.log("Photo added to gallery!");
};
</script>
```
