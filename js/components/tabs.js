document.addEventListener("DOMContentLoaded", function(event) {
    const tabsComponents = document.querySelectorAll(".trn-tabs");

    if(tabsComponents) {
        tabsComponents.forEach(function(tabs) {
            const switchers = tabs.querySelectorAll(".trn-tabs-nav button");
            const tabsInfo = tabs.querySelectorAll(".trn-tabs-body .trn-tabs-body-item");
            if(switchers && tabsInfo) {
                switchers.forEach(function(switcher, index){
                    switcher.addEventListener("click", function(){
                        switchers.forEach(function(subswitcher, subindex){
                            if(subindex !== index) {
                                subswitcher.classList.remove("active");
                                tabsInfo[subindex].classList.remove("active");
                            } else {
                                subswitcher.classList.add("active");
                                tabsInfo[subindex].classList.add("active");
                            }
                        });
                    })
                })
            }
        })
    }
});