import { createClient } from "https://esm.sh/@supabase/supabase-js";
const supabaseUrl = "https://siezjqyrethyhwifvgli.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpZXpqcXlyZXRoeWh3aWZ2Z2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MDQxODQsImV4cCI6MjA0NTE4MDE4NH0.koxHmjD-IM2-VmgPt9QIoK6pgdSiKbIaOe6XYiP-kqs";
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Zoberie zo supabase tabuľku  shopping_lists  a vráti jej obsah.
 * Ak nastane chyba, vypíše ju na konzolu a vráti prázdne pole.
 * 
 */
 async function getShoppingLists() {
  const { data, error } = await supabase
    .from("shopping_lists")
    .select("*");
  if (error) {
    console.error(error);
    return []
  }
   return data;
  // console.log(data);
};

/**
 * Zoberie zo supabase tabuľku shopping_lists a shopping_list_items a vráti ich obsah
 * ako jeden objekt. Ak nastane chyba, vypíše ju na konzolu a vráti prázdne pole.
 * 
 * @param {number} listId id zoznamu, ktorý chceme zobraziť
 * @returns {Object} objekt s obsahom zoznamu a položiek v ňom
 */
 async function getShoppingListsItems(listId) {
  const { data: shoppingList, error: listError } = await supabase
    .from("shopping_lists")
    .select("*")
    .eq("id", listId)
    .single();
  if (listError) {
    console.error(listError);
    return []
  }
  const { data: items, error: ItemError } = await supabase
    .from("shopping_list_items")
    .select("*")
    .eq("shopping_list_id", listId);
  if (ItemError) {
    console.error(ItemError);
    return []
  }
  return { ...shoppingList, items:items };

} 

export async function initializeShoppingList() {

      // Načítanie zoznamov
      const lists = await getShoppingLists()
      console.log('Nákupné zoznamy:', lists)
    
      // Ak máme aktívny zoznam, načítame jeho položky
      if (lists.length > 0) {
      const activeList = await getShoppingListsItems(lists[0].id)
      console.log('Aktívny zoznam s položkami:', activeList)
    }

  // try {
  //     // Načítame zoznamy
  //     const lists = await shoppingListService.getShoppingLists()
  //     console.log('Nákupné zoznamy:', lists)



  //         // Zobrazenie položiek v Kanban boardu
  //         activeList.items.forEach(item => {
  //             const column = document.getElementById(item.status)
  //             if (column) {
  //                 const itemElement = createItemElement(item)
  //                 column.appendChild(itemElement)
  //             }
  //         })
  //     }
  // } catch (error) {
  //     console.error('Chyba pri načítaní dát:', error)
  // }
}

