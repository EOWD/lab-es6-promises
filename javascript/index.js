// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
          },
          (error) => console.log(error)
        );
        getInstruction(
          "mashedPotatoes",
          3,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              4,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li> Mashed potatoes are ready! </li>`;
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);



// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
    //  ... Your code here
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
    //  ... Your code here
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
    //  ... Your code here
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
    //  ... Your code here
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);

    //  ... Your code here
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);

    //  ... Your code here
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);

    //  ... Your code here
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    //  ... Your code here
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// ...

// Iteration 3 using async/await
const makeBroccoli = async () => {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      const step = await obtainInstruction("broccoli", i);

      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
makeBroccoli();
// ...

// Bonus 2 - Promise all

promises = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  promises.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(promises)
  .then((steps) => {
    const brusselsSproutsList = document.querySelector("#brusselsSprouts");
    steps.forEach((step) => {
      brusselsSproutsList.innerHTML += `<li>${step}</li>`;
    });

    brusselsSproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
  })
  .catch((error) => {
    console.error(error);
  });
