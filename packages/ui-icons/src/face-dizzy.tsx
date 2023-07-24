import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceDizzy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceDizzy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceDizzy} {...props} />;
};

export default FaceDizzy;
