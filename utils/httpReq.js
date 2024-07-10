const URL = 'https://api.dictionaryapi.dev/api/v2/entries/n/';

const fetchData = async (word) => {
    try {
        const res = await fetch(`${URL} ${word}`);
        const json = await res.json(); 
        if(!res.ok){
            swal(`No results found for'${word}'`,"The word you've entered isn't in the dictionary." , "warning");
            
        } else{
            return json;

        }
    } catch (error) {
        swal('Error',"Something went wrong" , "error");
    }
}

export { fetchData }; 