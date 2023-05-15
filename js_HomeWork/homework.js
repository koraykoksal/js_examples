
let uk_bk=0
let uk = 0
let bk = 0




for (let i = 1; i < 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {

      uk_bk = i

      console.log(`FizBuz : ${uk_bk}`);

    } else if (i % 3 == 0) {

      uk=i

      console.log(`Fiz : ${uk}`);

    } else if (i % 5 == 0) {

      bk=i

      console.log(`Buz : ${bk}`);

    }
    
    

    //console.log(`Fiz : ${uk}, Buz : ${bk} , FizBuz : ${uk_bk}`);

}