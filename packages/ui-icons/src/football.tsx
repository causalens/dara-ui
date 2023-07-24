import { faFootball } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Football icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Football = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFootball} {...props} />;
};

export default Football;
