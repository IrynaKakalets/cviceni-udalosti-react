/*
Zadání 1: Pomocí události `change` a vlastnosti `event.target.value` vypisujte do konzole, co
  postupně uživatel do inputu píše ve formátu
  console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).
Zadání 2: Pokud uživatel z textového políčka vše smaže, vypište „Uživatel nenapsal nic“.
*/

export const Uloha4 = () => {
  return (
    <input
      onChange={(e) => {
        const result =
          e.target.value === ''
            ? 'Uživatel nenapsal nic.'
            : `Uživatel napsal: ${e.target.value}`;
        console.log(`Uživatel napsal: ${result}`);
      }}
    />
  );
};
