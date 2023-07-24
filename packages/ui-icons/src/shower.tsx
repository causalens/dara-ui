import { faShower } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shower icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shower = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShower} {...props} />;
};

export default Shower;
