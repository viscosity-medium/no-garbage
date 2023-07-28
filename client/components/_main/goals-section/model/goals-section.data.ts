export const goalsSectionData = (t, goals) => [
    {
        backgroundImage: "/assets/main-page/goals-section-1.png",
        descriptionText: t('goals1Description'),
        number: goals.cleanups_number,
        margin: "0 auto 0 0"
    },
    {
        backgroundImage: "/assets/main-page/goals-section-2.png",
        descriptionText: t('goals2Description'),
        number: goals.volunteers_number,
        margin: "36px 0 36px auto"
    },
    {
        backgroundImage: "/assets/main-page/goals-section-3.png",
        descriptionText: t('goals3Description'),
        number: goals.garbage_kilograms,
        margin: "0 auto 0 0"
    },
]