import { faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SpaghettiMonsterFlying icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SpaghettiMonsterFlying = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSpaghettiMonsterFlying} {...props} />;
};

export default SpaghettiMonsterFlying;
