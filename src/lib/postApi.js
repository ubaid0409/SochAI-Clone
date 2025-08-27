import apiClient from './apiClient'

export const postApi = {
  async list() {
    // demo posts
    return [
      {
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=425&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 1,
        author: 'waiz804',
        content: 'SHADI KAB HOGI MERI MEIN BHT AKELA HUN',
        likes: 2,
        comments: 5,
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 2,
        author: 'RZA',
        content: 'Comparison of ChatGPT-4 and unreleased ChatGPT-5 capabilities',
        likes: 1,
        comments: 9,
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 3,
        author: 'RZA',
        content: 'Comparison of ChatGPT-4 and unreleased ChatGPT-5 capabilities',
        likes: 1,
        comments: 9,
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 4,
        author: 'RZA',
        content: 'Comparison of ChatGPT-4 and unreleased ChatGPT-5 capabilities',
        likes: 1,
        comments: 9,
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 5,
        author: 'RZA',
        content: 'Comparison of ChatGPT-4 and unreleased ChatGPT-5 capabilities',
        likes: 1,
        comments: 9,
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 6,
        author: 'RZA',
        content: 'Comparison of ChatGPT-4 and unreleased ChatGPT-5 capabilities',
        likes: 1,
        comments: 9,
      },
    ]
  },
}
