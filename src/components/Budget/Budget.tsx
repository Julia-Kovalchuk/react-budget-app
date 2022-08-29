import { useBudgetContext } from "../../context/BudgetContex/BudgetContex";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Button, Input, StyledBudget } from "./styles";

export const Budget = () => {
  const { currency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isEditMode, toggleIsEditMode] = useToggle();
  const budgetEnter = useInput();

  if (isEditMode) {
    const handleSave = (): void => {
      setBudget(budgetEnter.value);
      budgetEnter.value = "";
      toggleIsEditMode();
    };

    return (
      <StyledBudget>
        <Input type="number" placeholder="Enter budget..." {...budgetEnter} />
        <Button type="button" onClick={handleSave}>
          Save
        </Button>
      </StyledBudget>
    );
  } else {
    const handleEdit = (): void => {
      toggleIsEditMode();
    };

    return (
      <StyledBudget>
        <p>Budget: {currency + budget}</p>
        <Button type="button" onClick={handleEdit}>
          Edit
        </Button>
      </StyledBudget>
    );
  }
};
