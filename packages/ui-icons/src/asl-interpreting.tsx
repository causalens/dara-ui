import { faAslInterpreting } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AslInterpreting icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AslInterpreting = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAslInterpreting} {...props} />;
};

export default AslInterpreting;
