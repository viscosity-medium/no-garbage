export const initializeModalForm = ({content}) => {
    console.log(content)
    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };

    return({
        id: content?.document?.id,
        description: content?.document?.description || "",
        status: content?.document?.status || "",
        community: content?.document?.community || "",
        announcement: content?.document?.announcement || "",
        dateAdded: new Date(content?.document?.created_on * 1000).toLocaleDateString("en-US", options) || "",
        dateModified: new Date(content?.document?.modified_on  * 1000).toLocaleDateString("en-US", options) || "",
        userName: content?.document.user_name || "",
        meetUpDate: content?.document?.meet_up?.date || "",
        meetUpTime: content?.document?.meet_up?.time || "",
        meetUpDescription: content?.document?.meet_up?.description || "",

        isChanged: false
    })
}