import { faRibbon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ribbon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ribbon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRibbon} {...props} />;
};

export default Ribbon;
