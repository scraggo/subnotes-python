function getTestString() {
    return `z title should be low
subnote below z title

+Project1 @tag
    x done item in project
    task1 for project @!!!
    x another done item in project
    task2 for project
    task3 for project
    x 3rd done item in project

Not a project, so it's a note
    x done item for note @tag
    subnote with priority tag @!

x Top level done item @innertag embedded tag

x Top level done item with subnote
subnote1 for done header
subnote2 for done header

x Top level done item with tag @!

note, no subnotes 1 lots of tags @! @tag @othertag @crazy

note, no subnotes 2

Note with tag @!
    x done item for note
    not done item for a note @tag
      `;
}

// console.log(getTestString());