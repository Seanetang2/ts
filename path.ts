import path from "path"

const getExt = path.extname(
    "C:\Users\yankiboi\Pictures\dropdownsection"
);
console.log(getExt);

console.log(
    path.basename(
        "C:\\Users\\yankiboi\\Pictures\\dropdownsection"
    )
);
console.log(
    path.dirname(
        "C:\\Users\\yankiboi\\Pictures\\dropdownsection"
    )
);

let mine = path.toNamespacedPath(
        "C:\Users\yankiboi\Pictures\dropdownsection"

)
console.log(mine);


console.log(
    path.join("myname","is sean")
);

console.log(
    path.delimiter(
        "C:\\Users\\yankiboi\\Pictures\\dropdownsection"

    )
);
