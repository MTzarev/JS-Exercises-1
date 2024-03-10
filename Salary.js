function salary(input) {

    let numTabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2



    for (let i = 0; i <= numTabs; i++) {
        let tabsName = input[index];
        index++

        if (tabsName === "Facebook") {
            salary -= 150
        } else if (tabsName === "Instagram") {
            salary -= 100
        } else if (tabsName === "Reddit") {
            salary -= 50
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(salary);
    }

}
salary(["5",
"500",
"Facebook",
"Reddit",
"Instagram","Facebook", "Facebook"])