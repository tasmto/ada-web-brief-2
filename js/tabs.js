const setScheduleTabFunctionality = () => {
    const allTheScheduleBlocks = document.querySelectorAll('.schedule-component--outer');
 
    if(!allTheScheduleBlocks) {return}
    allTheScheduleBlocks.forEach(scheduleBlock => {
        const tabTitles = scheduleBlock.querySelectorAll('.tab');
        tabTitles.forEach(tabTitle => {
            tabTitle.setAttribute('onclick', 'changeScheduleTab(this)');
        })
    })
}; 

(function () {
    setScheduleTabFunctionality ();

} ());

const closeCurrentActiveScheduleTab = blockParent =>  {
    const bothOpenElements =  blockParent.querySelectorAll('[aria-expanded = "true"]');
    if(!bothOpenElements) {return}

    bothOpenElements.forEach(openElement => {
        openElement.setAttribute('aria-expanded', 'false')
    })
}

const openSelectedScheduleTab = (tab, contentToActivate) => {
    tab.setAttribute('aria-expanded', 'true');
    contentToActivate.setAttribute('aria-expanded', 'true');
}

const changeScheduleTab = tab => {
    const contentToActivate = document.getElementById(`${(tab.getAttribute('aria-controls'))}`);
    const tabParentOuter = tab.parentElement.parentElement.parentElement;

    closeCurrentActiveScheduleTab (tabParentOuter);
    openSelectedScheduleTab(tab, contentToActivate);

}