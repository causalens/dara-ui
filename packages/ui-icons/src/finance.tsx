import { mdiFinance } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A Finance icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const Finance = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiFinance} {...props} />;
};

export default Finance;
