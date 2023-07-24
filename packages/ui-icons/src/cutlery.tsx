import { faCutlery } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cutlery icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cutlery = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCutlery} {...props} />;
};

export default Cutlery;
