import { faFlask } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Flask icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Flask = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFlask} {...props} />;
};

export default Flask;
