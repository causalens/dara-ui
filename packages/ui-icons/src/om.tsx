import { faOm } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Om icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Om = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faOm} {...props} />;
};

export default Om;
