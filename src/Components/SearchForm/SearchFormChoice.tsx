import SearchFormChoiceStyle from "../../Style/SearchFormStyle/SearchFormChoiceStyle.module.css";

const SearchFormChoice = () => {
    return (
      <div className={SearchFormChoiceStyle.container}>
        <h2>Adopte</h2>
        <fieldset className={SearchFormChoiceStyle.choice}>
          <legend>Je cherche</legend>

          <div>
            <input type="radio" id="homme" name="homme" />
            <label for="homme">homme</label>
          </div>

          <div>
            <input type="radio" id="femme" name="femme" />
            <label for="femme">femme</label>
          </div>

          <div>
            <input type="radio" id="les deux" name="les deux" />
            <label for="les deux">les deux</label>
          </div>

          <div>
            <input type="radio" id="autres" name="autres" />
            <label for="autres">autres</label>
          </div>
        </fieldset>
        <button className={SearchFormChoiceStyle.btn} type="button">Suivant</button>
      </div>
    );
};

export default SearchFormChoice;