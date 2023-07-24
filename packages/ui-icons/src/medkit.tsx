import { faMedkit } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Medkit icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Medkit = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMedkit} {...props} />;
};

export default Medkit;
