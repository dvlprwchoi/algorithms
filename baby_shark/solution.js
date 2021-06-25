const babyShark = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log('Baby shark');
        } else {
            console.log('doo doo do doo do do');
        }
    }
}

babyShark(7);