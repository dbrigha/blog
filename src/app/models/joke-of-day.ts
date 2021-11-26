export interface JokeOfDay {
  success: {
    total: number
  },
  contents: {
    jokes: [
      {
        category: string,
        title: string,
        description: string,
        background: string,
        date: string,
        joke: {
          title: string,
          length: string,
          clean: string,
          racial: string,
          date: string,
          id: string,
          text: string
        }
      }
    ],
    copyright: string
  }
}
