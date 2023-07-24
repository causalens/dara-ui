import { faRocket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rocket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rocket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRocket} {...props} />;
};

export default Rocket;
