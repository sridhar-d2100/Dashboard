const CardDescription_current_date = () => {
    // Get current date
    const currentDate = new Date();
  
    // Format the date as needed
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    return <p>Date: {formattedDate}</p>;
  };
  
  export default CardDescription_current_date;
  