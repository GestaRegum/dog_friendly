document.addEventListener("DOMContentLoaded", function(event) {
    const faqs = document.querySelectorAll(".trn-faq");

    if(faqs) {
        faqs.forEach(function(faq) {
            const questions = faq.querySelectorAll("details");
            if(questions) {
                questions.forEach(function(question, index){
                    question.addEventListener("click", function(){
                        questions.forEach(function(subquestion, subindex){
                            if(subindex !== index) {
                                subquestion.open = false;
                            }
                        });
                    })
                })
            }
        })
    }
});