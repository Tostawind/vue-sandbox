import { reactive } from "vue";

export const store = reactive({
    likes: 0,
    increment() {
        this.likes++
    }
})