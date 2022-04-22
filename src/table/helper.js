export class Table{

  dateModifierWithYear(date) {
    const newDate = new Date(date);
    const stringDate = newDate.toDateString();  
    return stringDate;
  }
}