# Currency Converter Program

# Logic:

    ┌───────────────────┐
    │                   │
    │ ┌─┬─►DOLLAR       │
    │ │ │┤►YEN          │
    │PKR│┤►EURO         │
    ├───┴──┬──────────┬─┘
    │      │┼┤►PKR    │
    │DOLLAR├─┘►YEN    │
    │      │ ▲ EURO   │
┌───┼────┬─┴────────┬─┴┐
│   │YEN │┤►PKR     │  │
│   │ ┌─▲├┤►DOLLAR  │  │
└─┬┬┴─┴────►EURO    │  │
  ││ EURO           │  │
  ││   │            │  │
  └┤   └┬──►PKR     │  │
   │    └┼┤►DOLLAR  │  │
   │     └─►YEN     │  │
   │                └─┬┘
   │                  │
   └──────────────────┘

## npm i hizbullah-currency-converter (to install)

## npx hizbullah-currency-converter (terminal/cmd)