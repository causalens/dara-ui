import { faHryvnia } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hryvnia icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hryvnia = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHryvnia} {...props} />;
};

export default Hryvnia;
