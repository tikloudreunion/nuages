'use client';

import { createTheme } from '@mui/material/styles';
import { inputsCustomizations } from '@/theme/customizations/inputs';
import { dataDisplayCustomizations } from '@/theme/customizations/dataDisplay';
import { feedbackCustomizations } from '@/theme/customizations/feedback';
import { navigationCustomizations } from '@/theme/customizations/navigation';
import { surfacesCustomizations } from '@/theme/customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from '@/shared-theme/themePrimitives';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '@/theme/customizations';

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
    },
    colorSchemes,
    typography,
    shadows,
    shape,
    components: {
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
        ...surfacesCustomizations,
        ...chartsCustomizations,
        ...dataGridCustomizations,
        ...datePickersCustomizations,
        ...treeViewCustomizations,
    },
});

export default theme;