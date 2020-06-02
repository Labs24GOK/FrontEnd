export const getMessagesForStaff = (staff) => {
    let messages = [];

    if (staff && staff.length > 0)
    {
        let issues = 0;

        staff.forEach(member => {

            if (!member.courses)
            {
                issues += 1;
                messages.push(member.first_name + " do not have nay registered courses yet.");
            }
        })

        if (issues === 0)
            { messages.push("You're all up to date"); }
    }
    else
    {
        messages.push("Nothing here yet")
    }

    return messages;
}