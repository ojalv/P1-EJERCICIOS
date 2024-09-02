let planBasico, PlanEstandar, PlanPremium

planBasico="2 gb x $10"
PlanEstandar="5 gb x $20"
PlanPremium="10 gb x $50"



document.getElementById("PlanBasico").textContent=`Plan Basico \n${planBasico}`;
document.getElementById("PlanEstandar").textContent=`Plan Estandar \n${planBasico}`
document.getElementById("PlanPremium").textContent=`Plan Premium \n${planBasico}`


document.getElementById("boton").addEventListener("click", ()=>{
    document.getElementById("contenedorPlanes").classList.toggle("hidden")
})