import { mdiFormDropdown } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A FormDropdown icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const FormDropdown = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiFormDropdown} {...props} />;
};

export default FormDropdown;
