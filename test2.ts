enum QuestionStaatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}
async function getFaqs(req: {
    topicId: number,
    status: QuestionStaatus
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: QuestionStaatus

}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    })
    const data = await res.json()
    return data
}
